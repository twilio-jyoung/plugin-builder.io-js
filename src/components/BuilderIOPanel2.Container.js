import { withTaskContext } from "@twilio/flex-ui";
import BuilderIOPanel2 from "./BuilderIOPanel2";
import { cleanTaskObject } from "../utils/flexObjectCleaner";

const BuilderIOPanel2Container = (props) => {

    let data = {};
    
    if(props){
        
        data.hasTasks = props.tasks?.size !== undefined && props.tasks.size > 0;
        data.hasSelectedTask = props.selectedTaskSid !== undefined;
        data.selectedTaskSid = data.hasSelectedTask ? props.selectedTaskSid : "";
        data.task = data.hasSelectedTask ? cleanTaskObject(props.task) : null;
    }

    return (
        <React.Fragment>
            <BuilderIOPanel2 data={data}/>
        </React.Fragment>
      );
};

export default withTaskContext(BuilderIOPanel2Container);