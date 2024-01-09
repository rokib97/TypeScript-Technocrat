{
  // nullable type
  function searchName(value: string | null) {
    if (value) {
      console.log("Value Found");
    } else {
      console.log("value not found!");
    }
  }
  searchName(null);

  //   unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      console.log(`Converted Speed is ${(value * 1000) / 3600} ms^-1`);
    } else if (typeof value === "string") {
      console.log(
        `Converted Speed is ${
          (parseFloat(value.split(" ")[0]) * 1000) / 3600
        } ms^-1`
      );
    } else {
      console.log("Wrong Input!");
    }
  };

  //   getSpeedInMeterPerSecond("1000 ms^-1");
  getSpeedInMeterPerSecond(null);

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("muskil se error hogaya....");
}
