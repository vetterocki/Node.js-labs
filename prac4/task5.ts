type Handler = () => void;

class MyEventEmitter {
    private handlers: { [eventName: string]: Handler[] } = {};

    public registerHandler(eventName: string, handler: Handler): void {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    public emitEvent(eventName: string): void {
        const eventHandlers = this.handlers[eventName];
        if (!eventHandlers || eventHandlers.length === 0) {
            return;
        }
        eventHandlers.forEach((handler) => handler());
    }
}


const emitter = new MyEventEmitter();
emitter.registerHandler('userUpdated', () => console.log('User account updated'));
emitter.emitEvent('userUpdated');
