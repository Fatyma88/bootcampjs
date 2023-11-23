import { getProperty } from './property-detail.api';
import { mapPropertyFromapiToVM } from './property-detail.mappers';
import { history } from '../../core/router/history';
import { setMainFeatures, setImages } from './property-detail.helpers';

let property = {
    images: '',
    title: '',
    city: '',
    rooms: '',
    squareMetters: '',
    bathrooms: '',
    notes: '',
    mainFeatures: '',
    equipmentsIds: '',
    locationUrl: '',

};

const params = history.getParams();
const isId = Boolean(params.id);

if  (isId) {
    getProperty(params.id).then(apiProperty => {
        console.log(apiProperty[0]);
        property = mapPropertyFromapiToVM(apiProperty[0]);
        console.log(property);
        setImages(property);
    });

}