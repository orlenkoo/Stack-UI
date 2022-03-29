import { CollectibleInfo } from "./stackcard.collectible.info.enum";

export class StackCard {
    id: string | undefined;
    brandImageUrl: string | undefined;
    amountToSave: number = 0;
    durationForSurvey: number = 0;
    cardTitle: string | undefined;
    cardDescription: string | undefined;
    completionTitle: string | undefined;
    completionDescription: string | undefined;
    infoRequired: CollectibleInfo [] = [];
    questionIds: string[] = [];
    completed: boolean = false;
    theme: string = 'bondi_blue';
}