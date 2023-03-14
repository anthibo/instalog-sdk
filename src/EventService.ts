import { HttpClient } from "./HttpClient";
import { CreateEventBody, CreateEventResponse, EventParams, FetchEventsResponse } from "./types/event.types";
import { instalogApi } from "./utils/axios-config";

export class EventService {
    private readonly endpoint = 'events'
    constructor(private readonly httpClient: HttpClient) {}

    async createEvent(createEventBody: CreateEventBody) {
        const { data: event } = await this.httpClient.postRequest<CreateEventBody, CreateEventResponse>(this.endpoint, createEventBody);
        return event
    }

    async listEvents(batchSize: number = 5, params?: EventParams) {
        const eventParams = this.buildEventsParamsString(batchSize, params)
        const { data: response } = await this.httpClient.getRequest<FetchEventsResponse>(`${this.endpoint}${eventParams}`);
        return response
    }

    private buildEventsParamsString = (batchSize: number, params?: EventParams) => {
        const eventURL = new URL(instalogApi)
        
        eventURL.searchParams.append('batchSize', `${batchSize}`)

        if (!params) return eventURL.searchParams.toString()

        if (params.action_id) {
            eventURL.searchParams.append('action_id', params.action_id)
        }

        if (params.action_name) {
            eventURL.searchParams.append('action_name', params.action_name)
        }

        if (params.actor_id) {
            eventURL.searchParams.append('action_name', params.actor_id)
        }

        if (params.target_id) {
            eventURL.searchParams.append('action_name', params.target_id)
        }

        if (params.search) {
            eventURL.searchParams.append('search', params.search)
        }

        return eventURL.searchParams.toString()
    }
}