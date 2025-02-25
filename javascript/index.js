// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`;
            getInstruction("mashedPotatoes", 6, (step6) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step6}</li>`;
            });
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises

obtainInstruction("steak", 0).then((step0) => {
  const steak = document.querySelector("#steak");
  steak.innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step1) => {
    steak.innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      steak.innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        steak.innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          steak.innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            steak.innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              steak.innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                steak.innerHTML += `<li>${step7}</li>`;
                steak.innerHTML += `<li>Stake is ready!</li>`;
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await

async function makeBroccoli() {
  const response = await obtainInstruction("broccoli", 0);
  const getBroccoli = document.querySelector("#broccoli");
  for (let i = 0; i < broccoli.length; i++) {
    getBroccoli.innerHTML += `<li>${await obtainInstruction(
      "broccoli",
      i
    )}</li>`;
  }
  getBroccoli.innerHTML += `Broccoli is ready!`;
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
