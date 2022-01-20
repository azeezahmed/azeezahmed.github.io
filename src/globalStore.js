import { readable } from 'svelte/store';

export const totalExperience = readable(0, (set) => {
    const joiningYear = new Date('06/22/2015')
    const currentYear = new Date()
    const experienceInYears = new Date(currentYear - joiningYear).getFullYear() - 1970
	set(experienceInYears);
});