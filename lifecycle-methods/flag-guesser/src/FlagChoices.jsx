import StyledButton from './StyledButton';

const FlagChoices = props => {
    let options = props.options || []
    const {handleChange, handleSubmit} = props;
    let inputs = options.map(opt => (
        <label>
            <input 
                type="radio"
                value={opt.id}
                checked={opt.checked}
                onChange={handleChange}
                name="flag-choice" />
            {opt.name}
        </label>
    ));

    return (
        <form onSubmit={handleSubmit}>
            {inputs}
            <StyledButton text="GUESS" type="submit"/>
        </form>
    )
}

export default FlagChoices;