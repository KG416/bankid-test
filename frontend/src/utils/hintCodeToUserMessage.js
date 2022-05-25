// TODO: Make hintCode function that handles all hintCodes. This is temp. 

const hintCodeToUserMessage = hintCode => {
    if (hintCode === 'outstandingTransaction') return 'Starta BankID-appen'
    if (hintCode === 'userSign') return 'Skriv in din säkerhetskod i BankID-appen och välj Identifiera eller Skriv under.'
}

export default hintCodeToUserMessage