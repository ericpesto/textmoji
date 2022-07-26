function UserInput({ handleUserInput, textPhrase }: { handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void; textPhrase: string }) {
  return (
    <>
      <input type="text" value={textPhrase} onChange={handleUserInput} />
      <p>
        English:
        {textPhrase}
      </p>
    </>
  );
}

export default UserInput;
