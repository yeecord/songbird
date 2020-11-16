initSidebarItems({"enum":[["LoopState","Looping behaviour for a `Track`."],["PlayMode","Playback status of a track."],["TrackCommand","A request from external code using a `TrackHandle` to modify or act upon an `Track` object."]],"fn":[["create_player","Creates a `Track` object to pass into the audio context, and a `TrackHandle` for safe, lock-free access in external code."]],"struct":[["Queued","Reference to a track which is known to be part of a queue."],["Track","Control object for audio playback."],["TrackHandle","Handle for safe control of a `Track` track from other threads, outside of the audio mixing and voice handling context."],["TrackQueue","A simple queue for several audio sources, designed to play in sequence."],["TrackState","State of an `Track` object, designed to be passed to event handlers and retrieved remotely via `TrackHandle::get_info` or `TrackHandle::get_info_blocking`."]],"type":[["TrackQueryResult","Alias for return value from calls to `TrackHandle::get_info`."],["TrackResult","Alias for most result-free calls to a `TrackHandle`."]]});