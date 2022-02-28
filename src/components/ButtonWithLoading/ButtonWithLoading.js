import React from "react";
import PropTypes from "prop-types";
import { Button, Spinner } from "@chakra-ui/react";

function ButtonWithLoading({
  colorScheme,
  variant,
  width,
  handleClick,
  loading,
  isDisabled,
  buttonText,
  mr,
}) {
  return (
    <Button
      colorScheme={colorScheme}
      variant={variant && variant}
      width={width && width}
      onClick={handleClick}
      mr={mr && mr}
      disabled={loading || isDisabled}
    >
      {loading ? (
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          ml="4px"
          size="sm"
        />
      ) : (
        buttonText
      )}
    </Button>
  );
}

ButtonWithLoading.propTypes = {
  colorScheme: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  handleClick: PropTypes.func,
  loading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  buttonText: PropTypes.string,
  mr: PropTypes.string,
};

export default ButtonWithLoading;
