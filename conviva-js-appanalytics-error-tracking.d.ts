import { BrowserPlugin } from '@snowplow/browser-tracker-core';
import { CommonEventProperties, SelfDescribingJson } from '@snowplow/tracker-core';
declare function ErrorTrackingPlugin(): BrowserPlugin;
/**
 * Event for tracking an error
 */
interface ErrorEventProperties {
    /** The error message */
    message: string;
    /** The filename where the error occurred */
    filename?: string;
    /** The line number which the error occurred on */
    lineno?: number;
    /** The column number which the error occurred on */
    colno?: number;
    /** The error object */
    error?: Error;
}
/**
 * Send error as self-describing event
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
declare function trackError(event: ErrorEventProperties & CommonEventProperties, trackers?: Array<string>): void;
/**
 * The configuration for automatic error tracking
 */
interface ErrorTrackingConfiguration {
    /** A callback which allows on certain errors to be tracked */
    filter?: (error: ErrorEvent) => boolean;
    /** A callback to dynamically add extra context based on the error */
    contextAdder?: (error: ErrorEvent) => Array<SelfDescribingJson>;
    /** Context to be added to every error */
    context?: Array<SelfDescribingJson>;
}
/**
 * Enable automatic error tracking, added event handler for 'error' event on window
 * @param configuration - The error tracking configuration
 * @param trackers - The tracker identifiers which the event will be sent to
 */
declare function enableErrorTracking(configuration?: ErrorTrackingConfiguration, trackers?: Array<string>): void;
export { ErrorTrackingPlugin, ErrorEventProperties, trackError, ErrorTrackingConfiguration, enableErrorTracking };
