type errorObj = {
  c: string;
  m: string;
};

type cartObj = {
  id: string;
  description: string;
};

type messageObj = {
  message: string;
};

type voucherObj = {
  value: string;
};

export enum StackBotEventType {
  BOT_HIDDEN = 'BH',
  BOT_SHOWN = 'BS',
  BOT_CLICKED = 'BC',
  APP_LOADED = 'AL',
  STACK_BOT_PILL_SHOWN = 'PS',
  STACK_BOT_MESSAGE_SHOWN = 'MS',
  CAMPAIGN_STARTED = 'CS',
  ANSWER_PROVIDED = 'AP',
  QUESTION_CHANGED = 'QC',
  APP_UNLOADED = 'AU',
  CAMPAIGN_COMPLETE = 'CC',
  VOUCHER_GENERATED = 'VG',
  VOUCHER_UPDATED = 'VU',
  VOUCHER_COPIED = 'VC',
  CHECKOUT_COMPLETE = 'CO',
  CHECKOUT_ABANDONED = 'CA',
  ERROR = 'E',
}

export class StackBotEvent {
  t: StackBotEventType | undefined;
  h: string = '';
  r: string = '';
  s: string = '';
  c: string = '';
  ts: number = 0;
  cn?: string;
  q?: string;
  a?: string;
  v?: string;
  err?: errorObj;
  opts?: string[] | voucherObj[] | messageObj[] | cartObj[];
  constructor() {
    this.ts = new Date().getTime();
  }
}
