module.exports = class Data1645737577382 {
  name = 'Data1645737577382'

  async up(db) {
    await db.query(`CREATE TABLE "emotion" ("id" character varying NOT NULL, "emoji" text NOT NULL, "count" integer NOT NULL, "sender_id" character varying NOT NULL, "nft_id" character varying NOT NULL, CONSTRAINT "PK_438ccbb44b03e5b3a7667278155" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_54ebcdca9c7f6c6e5f9c31f522" ON "emotion" ("sender_id") `)
    await db.query(`CREATE INDEX "IDX_8e9638f21e20207c998d7ec6ce" ON "emotion" ("nft_id") `)
    await db.query(`CREATE TABLE "nft" ("id" character varying NOT NULL, "symbol" text NOT NULL, "transferable" numeric NOT NULL, "sn" text NOT NULL, "metadata" text, "properties" text NOT NULL, "owner" text NOT NULL, "equipped" text NOT NULL, "pending" boolean NOT NULL, "priority" text array, "status" character varying(6) NOT NULL, "collection_id" character varying NOT NULL, "parent_id" character varying, "rootowner_id" character varying NOT NULL, CONSTRAINT "PK_8f46897c58e23b0e7bf6c8e56b0" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_ffe58aa05707db77c2f20ecdbc" ON "nft" ("collection_id") `)
    await db.query(`CREATE INDEX "IDX_56862f8751b2bd9fa30241ed76" ON "nft" ("parent_id") `)
    await db.query(`CREATE INDEX "IDX_b00e00408417b0951e3a200e5d" ON "nft" ("rootowner_id") `)
    await db.query(`CREATE TABLE "collection" ("id" character varying NOT NULL, "max" numeric NOT NULL, "symbol" text NOT NULL, "metadata" text, "properties" text NOT NULL, "nft_amount" numeric NOT NULL, "status" character varying(9) NOT NULL, "issuer_id" character varying NOT NULL, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_7357ca792bcba891c4fedf4f77" ON "collection" ("issuer_id") `)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "base_part" ("id" character varying NOT NULL, "full_id" text NOT NULL, "inner_id" text NOT NULL, "type" character varying(5) NOT NULL, "equippable" text array NOT NULL, "src" text, "thumb" text, "z" integer NOT NULL, "metadata" text, "base_id" character varying NOT NULL, CONSTRAINT "PK_e4219f063663b6ed8fdf3fc6714" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_a38faf6ca7e7b2c7ed27dd2049" ON "base_part" ("base_id") `)
    await db.query(`CREATE TABLE "base_theme" ("id" character varying NOT NULL, "name" text NOT NULL, "theme" text NOT NULL, "base_id" character varying NOT NULL, CONSTRAINT "PK_2d20299248d15290b301d163e2b" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_94be31a42fc897a3ca9a52d6dc" ON "base_theme" ("base_id") `)
    await db.query(`CREATE TABLE "resource_part" ("id" character varying NOT NULL, "resource_id" character varying NOT NULL, "part_id" character varying NOT NULL, CONSTRAINT "PK_3bb37082365db004adfbafc900c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_12fa766f9711b98c66c0032adb" ON "resource_part" ("resource_id") `)
    await db.query(`CREATE INDEX "IDX_127c85ecd4839bab57104e3739" ON "resource_part" ("part_id") `)
    await db.query(`CREATE TABLE "resource" ("id" character varying NOT NULL, "src" text, "metadata" text, "license" text, "thumb" text, "slot" text NOT NULL, "base_id" character varying, "theme_id" character varying, CONSTRAINT "PK_e2894a5867e06ae2e8889f1173f" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_d642baad1c299522a6a2a42d32" ON "resource" ("base_id") `)
    await db.query(`CREATE INDEX "IDX_74cdfaac7e063a80f5e547c8e8" ON "resource" ("theme_id") `)
    await db.query(`CREATE TABLE "base" ("id" character varying NOT NULL, "type" character varying(5) NOT NULL, "symbol" text NOT NULL, "issuer_id" character varying NOT NULL, CONSTRAINT "PK_ee39d2f844e458c187af0e5383f" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_001ca006b2291250e2e8245e52" ON "base" ("issuer_id") `)
    await db.query(`CREATE TABLE "call" ("id" character varying NOT NULL, "interaction" character varying(12), "value" text NOT NULL, "caller" text NOT NULL, "success" boolean NOT NULL, "error" text, "extrinsic_id" text NOT NULL, "block_number" text NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "base_id" character varying, "nft_id" character varying, "collection_id" character varying, CONSTRAINT "PK_2098af0169792a34f9cfdd39c47" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_2c1ef73296bc299e652076b83f" ON "call" ("base_id") `)
    await db.query(`CREATE INDEX "IDX_2ff3b8145583e5f0e2282d469c" ON "call" ("nft_id") `)
    await db.query(`CREATE INDEX "IDX_02a125af909495d36f81379d53" ON "call" ("collection_id") `)
    await db.query(`ALTER TABLE "emotion" ADD CONSTRAINT "FK_54ebcdca9c7f6c6e5f9c31f522e" FOREIGN KEY ("sender_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "emotion" ADD CONSTRAINT "FK_8e9638f21e20207c998d7ec6cec" FOREIGN KEY ("nft_id") REFERENCES "nft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft" ADD CONSTRAINT "FK_ffe58aa05707db77c2f20ecdbc3" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft" ADD CONSTRAINT "FK_56862f8751b2bd9fa30241ed76d" FOREIGN KEY ("parent_id") REFERENCES "nft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft" ADD CONSTRAINT "FK_b00e00408417b0951e3a200e5d9" FOREIGN KEY ("rootowner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "collection" ADD CONSTRAINT "FK_7357ca792bcba891c4fedf4f773" FOREIGN KEY ("issuer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "base_part" ADD CONSTRAINT "FK_a38faf6ca7e7b2c7ed27dd2049c" FOREIGN KEY ("base_id") REFERENCES "base"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "base_theme" ADD CONSTRAINT "FK_94be31a42fc897a3ca9a52d6dcb" FOREIGN KEY ("base_id") REFERENCES "base"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "resource_part" ADD CONSTRAINT "FK_12fa766f9711b98c66c0032adbb" FOREIGN KEY ("resource_id") REFERENCES "resource"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "resource_part" ADD CONSTRAINT "FK_127c85ecd4839bab57104e37394" FOREIGN KEY ("part_id") REFERENCES "base_part"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "resource" ADD CONSTRAINT "FK_d642baad1c299522a6a2a42d32c" FOREIGN KEY ("base_id") REFERENCES "base"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "resource" ADD CONSTRAINT "FK_74cdfaac7e063a80f5e547c8e8e" FOREIGN KEY ("theme_id") REFERENCES "base_theme"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "base" ADD CONSTRAINT "FK_001ca006b2291250e2e8245e52d" FOREIGN KEY ("issuer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_2c1ef73296bc299e652076b83fe" FOREIGN KEY ("base_id") REFERENCES "base"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_2ff3b8145583e5f0e2282d469ce" FOREIGN KEY ("nft_id") REFERENCES "nft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "call" ADD CONSTRAINT "FK_02a125af909495d36f81379d53c" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "emotion"`)
    await db.query(`DROP INDEX "public"."IDX_54ebcdca9c7f6c6e5f9c31f522"`)
    await db.query(`DROP INDEX "public"."IDX_8e9638f21e20207c998d7ec6ce"`)
    await db.query(`DROP TABLE "nft"`)
    await db.query(`DROP INDEX "public"."IDX_ffe58aa05707db77c2f20ecdbc"`)
    await db.query(`DROP INDEX "public"."IDX_56862f8751b2bd9fa30241ed76"`)
    await db.query(`DROP INDEX "public"."IDX_b00e00408417b0951e3a200e5d"`)
    await db.query(`DROP TABLE "collection"`)
    await db.query(`DROP INDEX "public"."IDX_7357ca792bcba891c4fedf4f77"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`DROP TABLE "base_part"`)
    await db.query(`DROP INDEX "public"."IDX_a38faf6ca7e7b2c7ed27dd2049"`)
    await db.query(`DROP TABLE "base_theme"`)
    await db.query(`DROP INDEX "public"."IDX_94be31a42fc897a3ca9a52d6dc"`)
    await db.query(`DROP TABLE "resource_part"`)
    await db.query(`DROP INDEX "public"."IDX_12fa766f9711b98c66c0032adb"`)
    await db.query(`DROP INDEX "public"."IDX_127c85ecd4839bab57104e3739"`)
    await db.query(`DROP TABLE "resource"`)
    await db.query(`DROP INDEX "public"."IDX_d642baad1c299522a6a2a42d32"`)
    await db.query(`DROP INDEX "public"."IDX_74cdfaac7e063a80f5e547c8e8"`)
    await db.query(`DROP TABLE "base"`)
    await db.query(`DROP INDEX "public"."IDX_001ca006b2291250e2e8245e52"`)
    await db.query(`DROP TABLE "call"`)
    await db.query(`DROP INDEX "public"."IDX_2c1ef73296bc299e652076b83f"`)
    await db.query(`DROP INDEX "public"."IDX_2ff3b8145583e5f0e2282d469c"`)
    await db.query(`DROP INDEX "public"."IDX_02a125af909495d36f81379d53"`)
    await db.query(`ALTER TABLE "emotion" DROP CONSTRAINT "FK_54ebcdca9c7f6c6e5f9c31f522e"`)
    await db.query(`ALTER TABLE "emotion" DROP CONSTRAINT "FK_8e9638f21e20207c998d7ec6cec"`)
    await db.query(`ALTER TABLE "nft" DROP CONSTRAINT "FK_ffe58aa05707db77c2f20ecdbc3"`)
    await db.query(`ALTER TABLE "nft" DROP CONSTRAINT "FK_56862f8751b2bd9fa30241ed76d"`)
    await db.query(`ALTER TABLE "nft" DROP CONSTRAINT "FK_b00e00408417b0951e3a200e5d9"`)
    await db.query(`ALTER TABLE "collection" DROP CONSTRAINT "FK_7357ca792bcba891c4fedf4f773"`)
    await db.query(`ALTER TABLE "base_part" DROP CONSTRAINT "FK_a38faf6ca7e7b2c7ed27dd2049c"`)
    await db.query(`ALTER TABLE "base_theme" DROP CONSTRAINT "FK_94be31a42fc897a3ca9a52d6dcb"`)
    await db.query(`ALTER TABLE "resource_part" DROP CONSTRAINT "FK_12fa766f9711b98c66c0032adbb"`)
    await db.query(`ALTER TABLE "resource_part" DROP CONSTRAINT "FK_127c85ecd4839bab57104e37394"`)
    await db.query(`ALTER TABLE "resource" DROP CONSTRAINT "FK_d642baad1c299522a6a2a42d32c"`)
    await db.query(`ALTER TABLE "resource" DROP CONSTRAINT "FK_74cdfaac7e063a80f5e547c8e8e"`)
    await db.query(`ALTER TABLE "base" DROP CONSTRAINT "FK_001ca006b2291250e2e8245e52d"`)
    await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_2c1ef73296bc299e652076b83fe"`)
    await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_2ff3b8145583e5f0e2282d469ce"`)
    await db.query(`ALTER TABLE "call" DROP CONSTRAINT "FK_02a125af909495d36f81379d53c"`)
  }
}