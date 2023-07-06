enum Status {
    Success = 'success',
    Failed = 'failed',
}

interface GetMoney {
    sum: number,
    from: number,
    to: number,
}

interface Data extends GetMoney {
    databaseId: number,
}

interface Responce {
    status: Status.Success,
    data: Data,
}

interface Fail {
    status: Status.Failed,
    data: {
        errorMessage: string,
        errorCode: number,
    }
}