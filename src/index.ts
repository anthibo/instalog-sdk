import { EventService } from "./EventService";
import { HttpClient } from "./HttpClient";
import { CreateEventBody, EventParams } from "./types/event.types";
import { handleErrors } from "./utils/error-handler";

export default class Instalog {
    private eventService: EventService;
    constructor(secretKey: string) {
        const httpClient = new HttpClient(secretKey);
        this.eventService = new EventService(httpClient);
    }

    async createEvent(event: CreateEventBody) {
        try {
            const response = await this.eventService.createEvent(event);
            return response;
        }
        catch (err) {
            handleErrors(err)
        }
    }

    async listEvents(batchSize: number, params?: EventParams) {
        try {
            const response = await this.eventService.listEvents(batchSize, params);
            return response;
        }
        catch (err) {
            handleErrors(err)
        }
    }
}