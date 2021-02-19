import { InitEvent } from "./interfaces/events/init.event";
import { PossibleEventsToSend } from "./interfaces/types";
import { StateType, TargetType } from "./interfaces/enums";
export declare class StreamDeckPlugin {
    private static _instance;
    static getInstance(): StreamDeckPlugin;
    _ws: WebSocket | undefined;
    initEventData: InitEvent | undefined;
    connectionReady: boolean;
    documentReady: boolean;
    isPi: boolean;
    pluginContext: string;
    piContext: string;
    uuid: string;
    debug: boolean;
    availableEvents: Map<string, Function[]>;
    availableCloseListener: {
        pi: Function[];
        plugin: Function[];
    };
    availableReadyListener: Function[];
    private constructor();
    private docReady;
    private connectElgatoStreamDeckSocket;
    private open;
    private close;
    private ready;
    private eventHandler;
    getContext(): string;
    setSettings(settings: any): void;
    requestSettings(): void;
    setGlobalSettings(settings: any): void;
    requestGlobalSettings(): void;
    openUrl(url: string): void;
    logMessage(message: string): void;
    setTitle(title: string, target?: TargetType, state?: StateType): void;
    setImage(image: string, target?: TargetType, state?: StateType): void;
    showAlert(): void;
    showOk(): void;
    setState(state: StateType): void;
    switchToProfile(profile: string, device?: string): void;
    sendToPropertyInspector(payload: any, action?: string): void;
    sendToPlugin(payload: any, action?: string): void;
    send(event: PossibleEventsToSend, data: any): void;
    private get ws();
    private set ws(value);
}