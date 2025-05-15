import getData from "../api/getData.js";
import { processingData } from "../util/util.js";
import dom from "../dom/dom.js";
import createMeteoDom from "../components/components.js"

const loadHandler = async () => {
    try {
        const data = await getData();
        const newData = processingData(data);
        const meteoDom = createMeteoDom(newData);
        dom.container.append(meteoDom);
    } catch (error) {
        console.error('Error loading data:', error);
    }
};

export default loadHandler;