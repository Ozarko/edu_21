# Education

It seems that this issue is related to the regression by the MvP team, our payload is correct, and has not been changed. It seems that when we re-sending new data, the database does not update the information in the fields, but tries to create a new record, but because we do not send id, the system sees that such a record has already been created and returns an error.
