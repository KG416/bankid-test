// if used, personalNumber must be 12 characters

function PersonalNumber({ personalNumber = '', setPersonalNumber = () => {} }) {
  return (
    <div>
      <label>
        Personnummer
        <input
          type='number'
          value={personalNumber}
          onChange={(e) => setPersonalNumber(e.target.value)}
        />
      </label>
    </div>
  )
}

export default PersonalNumber
