import {Data} from "./Data";

/** 
 * When your websocket connection is being closed by the server, you may receive a Closing packet.
 * 
 * @see https://docs.reconnected.cc/chatbox/websocket.html#closing-packet
 */
export interface Closing extends Data {
    /** The reason your connection is being closed. */
    closeReason: string;

    /** A human-readable message describing the close reason. */
    reason: string;
}
