module.exports = {
    "transform": {},
    "testMatch": [
        "**/answers/**/*.js",
    ],
    "moduleFileExtensions": [
        "js"
    ],
    "coverageDirectory": "./coverage",
    "collectCoverageFrom": [],
    "coveragePathIgnorePatterns": [
        "/@types/",
        "/Mock/",
        "enum.ts",
        "interface.ts",
    ],
    "coverageReporters": [
        "json-summary",
        "lcov",
        "text",
        "html",
    ],
    "reporters": [
        "default",
        "jest-junit",
    ],
    "testPathIgnorePatterns": ["node_modules"]
};
