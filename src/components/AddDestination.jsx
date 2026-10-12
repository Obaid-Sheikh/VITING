
import { useForm } from "react-hook-form";

function AddDestination({ handleSubmitData }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handleSubmitData(data);
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="border-b border-blue-100 bg-blue-50 px-6 py-6 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Add a Destination
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Add a new place to your collection.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Destination Name
            </label>

            <input
              {...register("title")}
              id="title"
              type="text"
              placeholder="e.g. Beautiful Mountains"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Image URL
            </label>

            <input
              {...register("image")}
              id="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Description
            </label>

            <textarea
              {...register("description")}
              id="description"
              rows="4"
              placeholder="Describe this destination..."
              className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="available"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Destination Status
            </label>

            <select
              {...register("available", {
                setValueAs: (value) => value === "true",
              })}
              id="available"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            >
              <option value="true">Available — Explore</option>
              <option value="false">Coming Soon</option>
            </select>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99] sm:w-auto"
            >
              + Add Destination
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddDestination;
