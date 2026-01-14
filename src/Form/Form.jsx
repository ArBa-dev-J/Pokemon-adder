import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  };

  // const sendData = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const response = await fetch("http://localhost:3000/", requestOptions);
  //     if (response.ok) {
  //       alert("data was sent");
  //     } else {
  //       throw new Error("Error");
  //     }
  //   } catch (error) {
  //     alert("error_");
  //   }
  // };

  return (
    <>
      <section>
        <h1 className="text-center font-bold text-[3rem]">Pokemon Searcher</h1>
        <h2 className="text-center font-bold text-[1.7rem] pt-10">
          Add a Pokemon
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-around w-250 m-auto pt-5">
            <div className="block text-center font-bold">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="Name"
                name="Name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="border block font-normal mt-2 pl-2"
              />
              {errors.name && (
                <span className="text-red-700">Name is required</span>
              )}
            </div>

            <div>
              <label htmlFor="Name" className="block text-center font-bold ">
                hp
              </label>
              <input
                type="text"
                id="hp"
                name="hp"
                {...register("hp", {
                  required: true,
                  min: 0,
                  pattern: /^\d*$/,
                })}
                placeholder="hp"
                className="border block font-normal mt-2 pl-2"
              />
              {errors.hp && (
                <span className="text-red-700 font-bold block text-center">
                  HP is required
                </span>
              )}
            </div>

            <div>
              <label htmlFor="Name" className="block text-center font-bold">
                Front Image Url
              </label>
              <input
                type="text"
                id="front"
                name="front"
                {...register("img")}
                placeholder="url"
                className="border block font-normal mt-2 pl-2"
              />
            </div>

            <div>
              <label htmlFor="Name" className="block text-center font-bold">
                Back Image Url
              </label>
              <input
                type="text"
                id="back"
                name="back"
                {...register("backImg")}
                placeholder="url"
                className="border block font-normal mt-2 pl-2"
              />
            </div>
          </div>
          <div className="flex justify-center p-5">
            <input
              type="submit"
              value="Submit"
              className="border pl-5 pr-5 rounded-[5px] bg-gray-300"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
