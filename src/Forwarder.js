import {Enumerations} from "./Enumerations.js";
import {Output} from "./Output.js";
import {WebMidi} from "./WebMidi.js";

/**
 * The `Forwarder` class allows the forwarding of a MIDI message to a predetermined list of
 * [`Output`](Output) objects granted the message matches certain conditions.
 *
 * @param {Output|Output[]} destinations An [`Output`](Output) object, or an array of such objects,
 * to forward the message to.
 *
 * @param {object} [options={}]
 * @param {string|string[]} [options.types] A message type (`"noteon"`, `"controlchange"`, etc.), or
 * an array of such types, that the message type must match in order to be forwarded. If this option
 * is not specified, all types of messages will be forwarded. Valid messages are the ones found in
 * either [`MIDI_SYSTEM_MESSAGES`](Enumerations#MIDI_SYSTEM_MESSAGES) or
 * [`MIDI_CHANNEL_MESSAGES`](Enumerations#MIDI_CHANNEL_MESSAGES).
 * @param {number} [options.channels=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]] A
 * MIDI channel number or an array of channel numbers that the message must match in order to be
 * forwarded. By default all MIDI channels are included (`1` to `16`).
 *
 * @license Apache-2.0
 * @since 3.0.0
 */
export class Forwarder {

  constructor(destinations, options = {}) {

    /**
     * An array of [`Output`](Output) objects to forward the messages to.
     * @type {Output[]}
     */
    this.destinations = [];

    /**
     * An array of message types (`"noteon"`, `"controlchange"`, etc.) that must be matched in order
     * for messages to be forwarded. By default, this array includes all
     * [`Enumerations.MIDI_SYSTEM_MESSAGES`](Enumerations#MIDI_SYSTEM_MESSAGES) and
     * [`Enumerations.MIDI_CHANNEL_MESSAGES`](Enumerations#MIDI_CHANNEL_MESSAGES).
     * @type {string[]}
     */
    this.forwardedTypes = [
      ...Object.keys(Enumerations.MIDI_SYSTEM_MESSAGES),
      ...Object.keys(Enumerations.MIDI_CHANNEL_MESSAGES)
    ];

    /**
     * An array of MIDI channel numbers that the message must match in order to be forwarded. By
     * default, this array includes all MIDI channels (`1` to `16`).
     * @type {number[]}
     */
    this.forwardedChannels = Enumerations.MIDI_CHANNEL_NUMBERS;

    /**
     * Indicates whether message forwarding is suspended or not in this forwarder
     * @type {boolean}
     */
    this.suspended = false;

    // Make sure parameters are arrays
    if (!Array.isArray(destinations)) destinations = [destinations];
    if (options.types && !Array.isArray(options.types)) options.types = [options.types];
    if (options.channels && !Array.isArray(options.channels)) options.channels = [options.channels];

    if (WebMidi.validation) {

      // Validate destinations
      destinations.forEach(destination => {
        if ( !(destination instanceof Output) ) {
          throw new TypeError("Destinations must be of type 'Output'.");
        }
      });

      // Validate types
      if (options.types) {

        options.types.forEach(type => {
          if (
            ! Enumerations.MIDI_SYSTEM_MESSAGES.hasOwnProperty(type) &&
            ! Enumerations.MIDI_CHANNEL_MESSAGES.hasOwnProperty(type)
          ) {
            throw new TypeError("Type must be a valid message type.");
          }
        });

      }

      // Validate channels
      if (options.channels) {

        options.channels.forEach(channel => {
          if (! Enumerations.MIDI_CHANNEL_NUMBERS.includes(channel) ) {
            throw new TypeError("MIDI channel must be bet between 1 and 16.");
          }
        });

      }

    }

    this.destinations = destinations;
    if (options.types) this.forwardedTypes = options.types;
    if (options.channels) this.forwardedChannels = options.channels;

  }

  /**
   * Sends the specified message to the forwarder's destination(s) if it matches the specified
   * type(s) and channel(s).
   *
   * @param {Message} message The MIDI message to forward.
   */
  forward(message) {

    // Abort if forwarding is currently suspended
    if (this.suspended) return;

    // Abort if this message type should not be forwarded
    if (!this.forwardedTypes.includes(message.type)) return;

    // Abort if this channel should not be forwarded
    if (message.channel && !this.forwardedChannels.includes(message.channel)) return;

    // Forward
    this.destinations.forEach(destination => destination.send(message));

  }

}