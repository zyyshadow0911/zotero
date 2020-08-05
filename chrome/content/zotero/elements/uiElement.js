/*
    ***** BEGIN LICENSE BLOCK *****
    
    Copyright © 2020 Corporation for Digital Scholarship
                     Vienna, Virginia, USA
                     https://www.zotero.org
    
    This file is part of Zotero.
    
    Zotero is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    Zotero is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    
    You should have received a copy of the GNU Affero General Public License
    along with Zotero.  If not, see <http://www.gnu.org/licenses/>.
    
    ***** END LICENSE BLOCK *****
*/

"use strict";

class UIElement extends HTMLElement {
	constructor() {
		super();
		
		this.shadow = this.attachShadow({ mode: 'open' });
		
		var style = document.createElement('style');
		style.textContent = `
			:host {
				display: -moz-box;
			}
			
			:host([hidden]) {
				display: none;
			}
		`;
		this.shadow.appendChild(style);
	}
	
	static get observedAttributes() { return ['hidden']; }
	
	get hidden() {
		return this.hasAttribute('hidden');
	}
	
	set hidden(value) {
		if (value) {
			// TEMP: Remove true once we're not in a XUL window
			this.setAttribute('hidden', 'true');
		}
		else {
			this.removeAttribute('hidden');
		}
	}
}