import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

import { usePagination, DOTS } from "Hooks/usePagination/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer className={classnames({ [className]: className })}>
      <PaginationItem
        className={classnames({
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <Arrow className="left" />
      </PaginationItem>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem className="dots" key={i}>
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            className={classnames({
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={i}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={classnames({
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <Arrow className="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: center;
`;

const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

const Arrow = styled.div`
  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }

  &.left {
    transform: rotate(-135deg) translate(-50%);
  }

  &.right {
    transform: rotate(45deg);
  }
`;

Pagination.propTypes = {
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
