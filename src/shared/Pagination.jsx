import React from 'react';

const rows = [10, 15, 20, 50]

const Pagination = ({
    currentPage,
    totalPages,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    loading,
    totalData = 0
}) => {
    return (
        <div className="flex justify-between items-center sm:p-4 p-2 bg-white gap-1">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="sm:px-4 px-2 max-sm:text-xs py-2 bg-[#AC1218] text-white font-semibold rounded disabled:opacity-50"
            >
                Previous
            </button>
            <span className="text-base font-semibold text-nowrap">
                <span className='max-sm:hidden'>Page</span> <span className="mx-2 max-sm:text-xs py-2 px-3 bg-black rounded-md text-white">{currentPage}</span> of
                <span className="mx-2 max-sm:text-xs py-2 px-3 border border-border-color rounded-md">{totalPages}</span>
            </span>
            <div className="flex items-center gap-1 ">
                {totalData > 10 && <select
                    value={rowsPerPage}
                    onChange={onRowsPerPageChange}
                    className="sm:px-4 px-1 py-2 sm:py-[10px] border max-sm:text-xs rounded-md"
                    disabled={loading}
                >
                    {rows.map((row) => <option value={row}>{row}</option>)}
                </select>}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || loading}
                    className="sm:px-4 px-2 py-2 bg-[#F5F5F5] max-sm:text-xs text-black border border-border-color font-semibold rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
