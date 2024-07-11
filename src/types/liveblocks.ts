import { BaseUserMeta, User } from "@liveblocks/client";

export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};
