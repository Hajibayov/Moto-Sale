import { ResponseTotal } from "./response-total.model";
import { StatusModel } from "./status-model";

export class ResponseListTotal<T> {
    status :StatusModel;
    response:ResponseTotal<T>;
    traceID:string;
}
