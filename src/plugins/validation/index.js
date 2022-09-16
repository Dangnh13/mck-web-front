import Vue from "vue";
import { configure, ValidationProvider, ValidationObserver} from "vee-validate";
import  i18n  from "../i18n";
import './rules.js'

configure({
    defaultMessage: (field, values) => {
        // override the field name.
        values._field_ = i18n.t(`validations.fields.${field}`);

        return i18n.t(`validations.messages.${values._rule_}`, values);
    }
});

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)