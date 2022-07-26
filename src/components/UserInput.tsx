function UserInput({handleUserInput, textPhrase}: {handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void, textPhrase: string}) {
    return (
        <>
            <input type="text" value={textPhrase} onChange={handleUserInput}></input>
            <p>English: {textPhrase}</p>
        </>
    )
}

export default UserInput