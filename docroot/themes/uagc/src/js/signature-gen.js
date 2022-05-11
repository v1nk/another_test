

let signatureGenerator = {
  elementFirstName: undefined,
  elementMiddleName: undefined,
  elementLastName: undefined,
  elementSuffix: undefined,
  elementPronouns: undefined,
  elementTitle: undefined,
  elementDepartment: undefined,
  elementAddress1: undefined,
  elementAddress2: undefined,
  elementOffice: undefined,
  elementCell: undefined,
  elementEmail: undefined,
  elementForm: undefined,
  elementEmailSignature: undefined,
  elementTemplateFirstName: undefined,
  elementTemplateMiddleName: undefined,
  elementTemplateLastName: undefined,
  elementTemplateSuffix: undefined,
  elementTemplatePronouns: undefined,
  elementTemplateTitle: undefined,
  elementTemplateDepartment: undefined,
  elementTemplateAddress1: undefined,
  elementTemplateAddress2: undefined,
  elementTemplateOffice: undefined,
  elementTemplateCell: undefined,
  elementTemplateEmail: undefined,
  elementCopy: undefined,
  elementHolder: undefined,
  elementOfficeTag: undefined,
  elementCellTag: undefined,
  elementOfficeCellTag: undefined,
  elementOfficeEmailTag: undefined,

  _showOffice: true,
  _showCell: true,
  _showOfficeCell: true,
  _showOfficeCellEmail: true,

  get showOffice() {
    return this._showOffice;
  },
  set showOffice(newVal) {
    this._showOffice = newVal;
    this.showHide();
  },
  get showCell() {
    return this._showCell;
  },
  set showCell(newVal) {
    this._showCell = newVal;
    this.showHide();
  },

  init: function () {
    this.elementEmail = document.querySelector('#st-email');
    this.elementForm = document.querySelector('#st-form');
    this.elementEmailSignature = document.querySelector('#email-signature');
    this.elementCopy = document.querySelector('#signature-copy');
    this.elementHolder = document.querySelector('#sc-value');

    this.elementTemplateFirstName = document.querySelector('#sc-first-name');
    this.elementTemplateMiddleName = document.querySelector('#sc-middle-name');
    this.elementTemplateLastName = document.querySelector('#sc-last-name');
    this.elementTemplateSuffix = document.querySelector('#sc-suffix');
    this.elementTemplatePronouns = document.querySelector('#sc-pronouns');
    this.elementTemplateTitle = document.querySelector('#sc-title');
    this.elementTemplateDepartment = document.querySelector('#sc-department');
    this.elementTemplateAddress1 = document.querySelector('#sc-address1');
    this.elementTemplateAddress2 = document.querySelector('#sc-address2');
    this.elementTemplateOffice = document.querySelector('#sc-office');
    this.elementTemplateCell = document.querySelector('#sc-cell');
    this.elementTemplateEmail = document.querySelector('#sc-email');
    this.elementOfficeTag = document.querySelector('.js-office');
    this.elementCellTag = document.querySelector('.js-cell');
    this.elementOfficeCellTag = document.querySelector('.js-office-cell');
    this.elementOfficeCellEmailTag = document.querySelector('.js-office-cell-email');

    this.elementForm.addEventListener("change", event => {
      this.setText(event);
    });

    this.elementForm.addEventListener("focusin", event => {
      this.setText(event);
    });
    this.elementCopy.addEventListener('click', event => {


      window.requestAnimationFrame(() => {
        this.elementHolder.value = this.elementEmailSignature.outerHTML;
        let val = this.elementHolder.value;
        this.elementHolder.select();
        function listener(e) {

          e.clipboardData.setData("text/html", val);
          e.clipboardData.setData("text/plain", val);
          e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand('copy');
        document.removeEventListener("copy", listener);
        window.alert("Copied to clipboard");
      });



    })
  },


  setText: function (event) {
    let value = event.target.value;
    let formElementID = event.target.id.replace('st', 'sc');
    let formElement = document.querySelector('#' + formElementID);


    if (formElementID === 'sc-suffix' && value) {

      let text = this.elementTemplateLastName.innerText;
      text = text.replaceAll(',', '');
      text = text + ',';

      this.elementTemplateLastName.innerText = text;
    }

    if (formElementID === 'sc-office' || formElementID === 'sc-cell') {
      formElement.href = 'tel:' + value.replaceAll('-', '');
      if (formElementID === 'sc-office') {
        if (value) {
          this.showOffice = true;
        } else {
          this.showOffice = false;
        }
        //<span style="color: #ab0520; font-family: Arial, sans-serif; text-decoration: none" class="js-office-ext">Ext: 45676</span>
      }

      if (formElementID === 'sc-cell') {
        if (value) {
          this.showCell = true;
        } else {
          this.showCell = false;
        }
      }
    }

    if (formElementID === 'sc-ext') {

      let officeText = document.querySelector('#st-office').value;
      if (value !== '') {
        officeText = officeText + " Ext: " + value;
      }
      this.elementTemplateOffice.innerText = officeText;

    }

    if (formElementID === 'sc-email') {
      formElement.href = 'mailto:' + value;
    }

    if (formElementID !== 'sc-ext') {
      if (value === '') {
        formElement.style.display = "none";
        this.elementOfficeCellEmailTag.style.display = "none";
      } else {
        formElement.style.removeProperty('display');
        if (this.showCell || this.showOffice) {
          this.elementOfficeCellEmailTag.style.removeProperty('display');
        }
      }
      formElement.innerText = value;
    }


  },

  showHide: function () {

    if (this.showOffice && this.showCell) {
      this.elementOfficeCellTag.style.removeProperty('display');
    } else {
      this.elementOfficeCellTag.style.display = "none";
    }
    if (this.showOffice) {
      this.elementOfficeTag.style.removeProperty('display');
    } else {
      this.elementOfficeTag.style.display = "none";
    }
    if (this.showCell && !this.showOffice) {
      this.elementCellTag.style.removeProperty('display');
    } else {
      this.elementCellTag.style.display = "none";
    }

  },



}
document.addEventListener('DOMContentLoaded', () => {
  signatureGenerator.init();

});

