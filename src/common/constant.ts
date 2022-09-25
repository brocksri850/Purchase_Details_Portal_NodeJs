export class Constants {
    DateTimeFormatServerSideUse(arg0: string, DateTimeFormatServerSideUse: any) {
        throw new Error("Method not implemented.");
    }

    Active = "Active"
    InActive = "InActive"

    Status = {
        Pending: "pending",
        Accept: "Accepted",
        NotAccept: "Already accepted the mail"
    }

    UpdateMsg = "Data updated"
    Subject = `Sending email confirmation`;

    Service = 'gmail'

    Auth = {
        User: 'testnodemailerinnodejs@gmail.com',
        Pass: 'wsszvkuvpcpcljod'
    }

    Error = "Oops! this email does not exits please signup another mail"
    Error1 = "Oops ! this email or user name does not exist. Please check spelling and try and again."

    InCorPass = "Password InCorrect"

    loginErr = "Login error in token creation"

    SecretKey = "adloggsangular&5&secret@mission"

    Offset = 8;

    InValidPassword = "Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character."
}

export const constants = new Constants();
var constant = new Constants();
export default constant;