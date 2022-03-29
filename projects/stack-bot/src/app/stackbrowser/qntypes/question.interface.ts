import { EventEmitter } from "@angular/core";

export interface QuestionTypeInterface {
    answered: EventEmitter<any>;
}