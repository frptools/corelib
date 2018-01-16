# Salix :: Runtime Library

Foundational functions and types for running a Salix application in a JavaScript execution environment.

## Resources

All resources are JSON-LD-compliant constructs. A resource is the "subject" in the standard subject-predicate-object triad better known as a triple, and its properties (which are also triples) form the "predicate" (property key) and "object" (property value) components of the resource's metadata.

Some resources exist only as a container for their metadata (the triples that their data is composed from), whereas others exist to produce an output signal, their metadata acting as a comprehensive set of inputs, parameters and context to be consumed in the production of the signal's value.

## Constructing a new resource

A new resource requires an initial state (a set of properties/triples), and a delta stream for managing its composition of properties, and the values thereof. The initial state may vary depending on the intent of the resource's owner, and whether or not the resource is being restored from a persisted state, or being created anew.

The resource constructor focuses on the initial state. One of the standard kernel properties, the "initializer", is a direct or indirect reference to a function that takes the initial resource as its input, and returns a delta stream to be folded back into the resource's properties over time. It is a bootstrapping mechanism that provides a resource with self-management capabilities. In effect, a resource with an initializer is able to act as its own agent, with complete autonomy to the extent that its owner permits.