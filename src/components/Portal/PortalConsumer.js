import React from 'react';

export default class PortalConsumer extends React.Component {
    componentDidMount() {
        this.checkManager();

        this.key = this.props.manager.mount(this.props.children);
    }

    componentDidUpdate() {
        this.checkManager();

        this.props.manager.update(this.key, this.props.children);
    }

    componentWillUnmount() {
        this.checkManager();

        this.props.manager.unmount(this.key);
    }

    checkManager() {
        if (!this.props.manager) {
            throw new Error(
                'Looks like you forgot to add Portal.Host'
            );
        }
    }

    render() {
        return null;
    }
}