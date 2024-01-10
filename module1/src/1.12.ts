{
  // nullable type
  function searchName(name: string | null) {
    name ? console.log("Value Found") : console.log("Value not found or null!");
  }
  //   searchName(null);
  //   searchName("rokib");

  //   unknown type
  const convertSpeedToMeterPerSecond = (input: unknown) => {
    try {
      if (typeof input === "number") {
        console.log(`Converted Speed is ${(input * 1000) / 3600} ms^-1`);
      } else if (typeof input === "string") {
        const numericValue = parseFloat(input.split(" ")[0]);
        if (!isNaN(numericValue)) {
          console.log(
            `Converted Speed is ${(numericValue * 1000) / 3600} ms^-1`
          );
        } else {
          throw new Error("Invalid numeric value in the string");
        }
      } else {
        throw new Error("Unsupported input type!");
      }
    } catch (error) {
      console.log(`Error: ${(error as Error).message}`);
    }
  };

  convertSpeedToMeterPerSecond("1000 ms^-2");
  convertSpeedToMeterPerSecond(1000);
  convertSpeedToMeterPerSecond(true);

  //   never type
  //   const throwError = (msg: string): never => {
  //     throw new Error(`Error: ${msg}`);
  //   };

  //   throwError("An error occurred...");
}
