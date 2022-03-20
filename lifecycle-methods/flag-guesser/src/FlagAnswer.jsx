import StyledButton from './StyledButton';

const FlagAnswer = ({correct, answer, onNext}) => (
    <div className='flag-answer'>
      {correct ?
        `Correct!: ${answer}` :
        `Incorrect! Correct Answer: ${answer}`}
      <StyledButton text="NEXT" onClick={onNext} />
    </div>
  );

export default FlagAnswer;