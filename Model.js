import React from "react";
import PropTypes from "prop-types";
import "./ModalDialog.scss";
import CloseIcon from "../icons/CloseIcon";

export const ModalDialog = ({
  isOpen,
  title,
  description,
  onClose,
  children,
  className,
  maxWidth,
  isLoading,
}) => {
  let style = {};
  if (maxWidth) {
    style.maxWidth = `${maxWidth}px`;
  }

  return (
    <div
      data-testid="modal-dialog"
      className={`modal ${
        isOpen ? "d-block fade order_page_modal--show modal-backdrop" : ""
      }`}
      role="dialog"
      aria-modal={isOpen}
      aria-hidden={!isOpen}
    >
      <div
        style={style}
        className={`modal-dialog modal-dialog-centered ${className || ""}`}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header modal-border ">
            <div className="modal-title">{title}</div>
            <button
              data-testid="modal--btn-close"
              type="button"
              className="close modal-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => onClose && onClose()}
            >
              <CloseIcon customClass="" />
            </button>
          </div>
          {isLoading && (
            <div className="modal-loading-wrap" data-testid="loader">
              <div className="loadersmall"></div>
            </div>
          )}
          {description && (
            <div className="modal-description" data-testid="modal-description">
              {description}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

ModalDialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  maxWidth: PropTypes.number,
  isLoading: PropTypes.bool,
};

export const Body = ({ children, className }) => (
  <div className={`modal-body ${className || ""}`}>{children}</div>
);

Body.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export const Footer = ({ children, className, isAlignCenterInSM = true }) => {
  const containerClassName = `modal-footer modal-border w-100 ${
    isAlignCenterInSM
      ? " d-sm-flex justify-content-center justify-content-md-end"
      : ""
  } ${className || ""}`;
  return <div className={containerClassName}>{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isAlignCenterInSM: PropTypes.bool,
};
