export const ICONS = {
    KEYBOARD: {
        path: require('./assets/icons/keyboard.svg'),
        alt: 'Keyboard-Game-Logo'
    },
    ARROW_DROPDOWN: {
        path: require('./assets/icons/arrow-dropdown.svg'),
        alt: 'Dropdown-Arrow-Down'
    },
    PLAY: {
        path: require('./assets/icons/play.svg'),
        alt: 'Play Icon'
    },
    PERSON: {
        path: require('./assets/icons/person.svg'),
        alt: 'Person Icon'
    },
    GAMEPAD: {
        path: require('./assets/icons/gamepad.svg'),
        alt: 'Gamepad Icon'
    },
    RELOAD: {
        path: require('./assets/icons/reload.svg'),
        alt: 'Reload Icon'
    }

}

export const DIFFICULTY_LEVELS = [{
    label: 'EASY',
    value: 1,
    range: {
        min: 1,
        max: 1.5
    }
}, {
    label: 'MEDIUM',
    value: 2,
    range: {
        min: 1.5,
        max: 2
    }
}, {
    label: 'HARD',
    value: 3,
    range: {
        min: 2,
        max: 1000000
    }
}]