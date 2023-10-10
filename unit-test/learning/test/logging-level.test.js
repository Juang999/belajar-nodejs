import winston from "winston"

test("test level logging", () => {
	const logger = winston.createLogger({
		level: "silly",
		transports: [
				new winston.transports.Console({})
			]
	})

	logger.error("hello error")
	logger.warn("hello warn")
	logger.info("hello info")
	logger.http("hello http")
	logger.verbose("hello verbose")
	logger.debug("hello debug")
	logger.silly("hello silly")
})