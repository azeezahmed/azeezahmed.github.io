import { readable } from 'svelte/store';

export const totalExperience = readable(0, (set) => {
    const joiningYear = new Date('06/22/2015').getFullYear()
    const currentYear = new Date().getFullYear()
	set(currentYear - joiningYear);
});