// TODO: Make hintCode function that handles all hintCodes. This is temp. 

export default function hintCodeToUserMessage(hintCode) {
    if (hintCode === 'outstandingTransaction') return 'Starta BankID-appen'
    if (hintCode === 'userSign') return 'Skriv in din säkerhetskod i BankID-appen och välj Identifiera eller Skriv under.'
}