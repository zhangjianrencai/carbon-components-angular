import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "./../i18n/index";
import { ExperimentalService } from "./../experimental.service";

/**
 * ***Inputs***
 * ```html
 * <ibm-modal-header>Header text</ibm-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * ```
 */
@Component({
	selector: "ibm-modal-header",
	template: `
		<header class="{{theme}} bx--modal-header">
			<ng-content></ng-content>
			<button
				type="button"
				class="bx--modal-close"
				(click)="onClose()">
				<span class="bx--assistive-text">{{ closeLabel }}</span>
				<svg ibmIconClose size="20" class="bx--modal-close__icon"></svg>
			</button>
		</header>

	`
})
export class ModalHeader {
	/**
	 * Sets the style on the modal heading based on its category.
	 */
	@Input() theme = "default";
	/**
	 * Accessible label for the header close button.
	 * Defaults to the `MODAL.CLOSE` value from the i18n service.
	 */
	@Input() closeLabel = this.i18n.get().MODAL.CLOSE;

	/**
	 * To emit the event of clicking on the close icon within the modal.
	 */
	@Output() closeSelect = new EventEmitter();

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {}

	/**
	 * Handles click for the close icon button within the `Modal`.
	 */
	public onClose() {
		this.closeSelect.emit();
	}
}
