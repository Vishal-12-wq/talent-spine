import { toast } from "react-toastify";

export const handleErrorToaster = (error) => {
    const errors = error?.response?.data?.errors;
    const message = error?.response?.data?.message;

    if (Array.isArray(errors) && errors.length > 0) {
        errors.forEach((err) => {
            toast.error(err?.msg || err?.message);
        });
    } else if (errors?.data && errors?.message) {
        const missingFields = errors.data.missingFields?.join(', ') || '';
        toast.error(`${errors.message} ${missingFields}`);
    } else if (message) {
        toast.error(message);
    } else {
        toast.error('Something went wrong!');
    }
};

export const handleDownload = async (url, filename) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl); // Clean up the blob URL
    } catch (error) {
        console.error("Error downloading the file", error);
    }
};

export const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});

export const trimText = (text = '', count = 30) => {
    return text.length > count ? `${text.slice(0, count)}...` : text
}

export const getLeadData = (resp, type) => {
    if (type === 'name') {
        const f_name = resp.find((d) => d.question === 'first_name')?.answer || ''
        const l_name = resp.find((d) => d.question === 'last_name')?.answer || ''

        return f_name + " " + l_name || undefined
    }

    const data = resp.find((d) => d.question === type)?.answer
    return data || ''
}

export const convertDateWithTimeZone = (date, timeZone = 'America/New_York') => {
    try {
        const inputDate = new Date(date);
        if (isNaN(inputDate.getTime())) {
            throw new Error('Invalid date');
        }

        const usaTimeZones = [
            'America/New_York',
            'America/Chicago',
            'America/Denver',
            'America/Los_Angeles',
            'America/Phoenix',
            'America/Anchorage',
            'America/Honolulu'
        ];

        const isUSATimeZone = usaTimeZones.includes(timeZone);

        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: isUSATimeZone
        });

        const parts = formatter.formatToParts(inputDate);

        const dateParts = {
            month: '',
            day: '',
            year: '',
            hour: '',
            minute: '',
        };

        parts.forEach(part => {
            if (dateParts.hasOwnProperty(part.type)) {
                dateParts[part.type] = part.value;
            }
        });

        const formattedDate = isUSATimeZone
            ? `${dateParts.month}/${dateParts.day}/${dateParts.year}, ${dateParts.hour}:${dateParts.minute} ${dateParts.hour < 12 ? 'AM' : 'PM'}`
            : `${dateParts.month}-${dateParts.day}-${dateParts.year}, ${dateParts.hour}:${dateParts.minute}`;

        return formattedDate;
    } catch (error) {
        console.error('Error converting date with timezone:', error.message);
        return null;
    }
};
