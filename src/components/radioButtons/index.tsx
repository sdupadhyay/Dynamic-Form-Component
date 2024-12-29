export const RadioButtons: React.FC = () => {
  return (
    <>
      <label
        htmlFor="Option2"
        className="flex cursor-pointer items-start gap-4"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="radio"
            className="size-4 rounded border-gray-300"
            id="Option2"
          />
        </div>
        <div>
          <strong className="font-medium text-gray-900"> Male </strong>
        </div>
      </label>
    </>
  );
};
