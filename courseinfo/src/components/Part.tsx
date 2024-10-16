import { CoursePart } from "./Content";

const Part = (props: CoursePart) => {
  switch (props.kind) {
    case "basic":
      return (
        <article>
          <h2>
            {props.name} {props.exerciseCount}
          </h2>
          <p>{props.description}</p>
        </article>
      );
    case "group":
      return (
        <article>
          <h2>
            {props.name} {props.exerciseCount}
          </h2>
          <p>group project exercises {props.groupProjectCount}</p>
        </article>
      );
    case "background":
      return (
        <article>
          <h2>
            {props.name} {props.exerciseCount}
          </h2>
          <p>{props.description}</p>
          <p>
            submit to{" "}
            <a href={props.backgroundMaterial} target="_blank">
              {props.backgroundMaterial}
            </a>
          </p>
        </article>
      );
    case "special":
      return (
        <article>
          <h2>
            {props.name} {props.exerciseCount}
          </h2>
          <p>{props.description}</p>
          <p>required skils: {props.requirements.join(", ")}</p>
        </article>
      );
    default: {
      const _exhaustiveCheck: never = props;
      return _exhaustiveCheck;
    }
  }
};

export default Part;
