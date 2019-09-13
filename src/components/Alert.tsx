import React from "react";
import classNames from "classnames";

type AlertProps = React.PropsWithChildren<{
  status: "info" | "warning" | "success" | "error";
  floating?: boolean;
  textOnly?: boolean;
  dismissable?: boolean;
  visible?: boolean;
}>;

export default function Alert({
  status,
  floating,
  textOnly,
  dismissable,
  visible = true,
  children
}: AlertProps) {
  const className = classNames("wombat-alert", {
    "alert-info": status === "info",
    "alert-warning": status === "warning",
    "alert-success": status === "success",
    "alert-error": status === "error",
    "is-visible": visible,
    "alert-floating": floating,
    "alert-text-only": textOnly
  });

  return (
    <div className={className}>
      <div className="icon-alert">
        <InfoCircleIcon />
      </div>

      <div className="msg-alert">{children}</div>

      {dismissable && (
        <button className="btn-link btn-alert">
          <CloseThinIcon />
        </button>
      )}
    </div>
  );
}

function InfoCircleIcon() {
  return <Icon name="icon-circle" />;
}

function CloseThinIcon() {
  return <Icon name="close-thin" />;
}

function Icon({ name }: { name: string }) {
  return <i className={`fa fa-${name}`} />;
}
