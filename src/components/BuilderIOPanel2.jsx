import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { withTaskContext } from "@twilio/flex-ui";
import { cleanTaskObject } from "../utils/flexObjectCleaner";

const BuilderIOPanel2 = (props) => {
  const [builderContentJson, setBuilderContentJson] = useState();
  const [builderData, setBuilderData] = useState();
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
      builder
      .get("panel-2", {
          url: location.pathname,
          cachebust: true,
          cacheSeconds: 60,
          userAttributes: {
              demo: "se-poc",
          },
      })
      .toPromise()
      .then((content) => setBuilderContentJson(content));
  }, []);

  useEffect(() => {
    console.log("BuilderIOPanel2: props.task useEffect hook fired")

    // build a data payload for builder any time the selected task changes
    let data = {};
    // data.hasTasks = props.tasks?.size !== undefined && props.tasks.size > 0;
    data.hasSelectedTask = props.selectedTaskSid !== undefined;
    // data.selectedTaskSid = data.hasSelectedTask ? props.selectedTaskSid : "";
    // data.task = data.hasSelectedTask ? cleanTaskObject(props.task) : null;

    setBuilderData(data);
  }, [props.task, props.selectedTaskSid])


  return (
    <React.Fragment>
        {(builderContentJson || isPreviewing) && (
          <BuilderComponent model="panel-2" content={builderContentJson} data={builderData} key={props.selectedTaskSid}/>  
          // <BuilderComponent model="panel-2" content={builderContentJson} data={props.data}/>  
        )}
    </React.Fragment>
  );
}



export default withTaskContext(BuilderIOPanel2);